var sku = angular.module('sku', []);
sku.filter('en_to_cn',function(){
	return function (str) {
        if(str=='color'){
        	return '颜色';
        }
        if(str=='size'){
        	return '大小';
        }
        if(str=='pattern'){
        	return '样式';
        }
    }
	
})
sku.directive('skuCom', function(){
	return {
		restrict: 'E',
		templateUrl: 'sku/sku.html',
		replace: true,
		scope: {
            skuList:'=sku'
		},
		link:function(scope,element,attrs){
			
		},
		controller: ['$scope', function($scope){
			$scope.skuType = {};
			$scope.typeIsSelected = {};
			$scope.skuList.forEach(function(item){
				Object.keys(item['attrs']).forEach(function(sitem){
			        //skuType
			        if($scope.skuType[sitem] && $scope.skuType[sitem].indexOf(item['attrs'][sitem]) === -1){
			          $scope.skuType[sitem].push(item['attrs'][sitem]);
			        }else if(!$scope.skuType[sitem]){
			          $scope.skuType[sitem] = [item['attrs'][sitem]];
			        }
			        //typeIsSelected
			        if(!$scope.typeIsSelected[sitem]){
			          $scope.typeIsSelected[sitem] = '';
			        }
			    })
			})
			for(key in $scope.skuType){
		        $scope.skuType[key].forEach((item, index) => {
		            $scope.skuType[key][index] = {'type': item, 'state': 2};
		        })
		    }
		    $scope.skuType = Object.assign({}, $scope.skuType);
			$scope.changeHander = function (attr,attrInfo){
				if(attrInfo.state==1){
					$scope.typeIsSelected[attr]=attrInfo.type;
				}
				if(attrInfo.state==2){
					$scope.typeIsSelected[attr]='';
				}
				for(var type in $scope.typeIsSelected){
					if(type!=attr){
						stateChange(type);
					}
				}
			}
			function stateChange(types){
				$scope.skuType[types].forEach(function(sitem){
					if(sitem.state!=1){
						for(var i=0;i<$scope.skuList.length;i++){
							if(comparedType($scope.skuList[i],types,sitem.type)){
								sitem.state=2;
								break;
							}else{
								sitem.state=0;
								continue;
							}
						}
					}
				})
			}
			function comparedType(data,types,val){
				if(data.instock&&data.attrs[types]==val){
					var coutK = 0;
					for(var k in $scope.typeIsSelected){
						if(k!=types&&$scope.typeIsSelected[k]){
							if($scope.typeIsSelected[k]==data.attrs[k]){
								coutK+=0;
							}else{
								coutK+=1;
							}
						}
					}
					if(coutK>0){
						return false;
					}else{
						return true;
					}
				}else{
					return false;
				}
			}
		}]
	}
})
sku.directive('listCom', function(){
	return {
		restrict: 'E',
		templateUrl: 'sku/listCom.html',
		replace: true,
		scope: {
            list: '=selectList',
            selectChange: '&selectChange',
            keyType: '@selectType'
		},
		link:function(scope,element,attrs){
			scope.selectAct = function(item){
				if(item.state==0){
					return false;
				}else if(item.state==2){
					scope.list.forEach(function(sitem){//只能有一项选中
						if(sitem.state==1){
							sitem.state=2;
						}
					});
					item.state=1;
					scope.selectChange({attr:scope.keyType,attrInfo:item});
				}else if(item.state==1){
					item.state=2;
					scope.selectChange({attr:scope.keyType,attrInfo:item});
				}
			}
		},
		controller: ['$scope', function($scope){
			
		}]
	}
})
