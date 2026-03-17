const isAnagram = function(a,b)
{
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a.length !==b.length )
    {
        return false;
    }    

    let obj_a={};
    let obj_b={};
    for(i=0;i<a.length;i++)
    {
        obj_a[a[i]]=  ( obj_a[a[i]] || 0 )+1;
         obj_b[b[i]]= ( obj_b[b[i]] || 0 )+1;   
    }
    for (const key in obj_a)
    {
        if(obj_a[key] !==obj_b[key]) return false;
    }

    return true;
}

console.log(isAnagram("rat","TAR"))