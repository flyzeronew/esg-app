
  export const extractDetailsFromSub = (menuData, pathName)=>{
    const onlyPathName =  pathName?.split("?")[0];
    return menuData.reduce((found,item)=>{
      return found || (item.subMenu?.find((sub)=> onlyPathName === sub.pathname ));
    }, null)
  }

 
