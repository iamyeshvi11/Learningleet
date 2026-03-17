/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
      if (s.length !== t.length) return false;

    let map = new Map();       
    let used = new Set();     
    for (let i = 0; i < s.length; i++) {
        let chS = s[i];
        let chT = t[i];
        if (map.has(chS)) {
            if (map.get(chS) !== chT) {
                return false;
            }
        } 
        else {
            if (used.has(chT)) {
                return false;
            }
            map.set(chS, chT);
            used.add(chT);
        }
    }

    return true;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    let map=new Map;
    let used=new Set;
    if(s.length!=t.length)
    {
        return false;
    }
    for(let i=0;i<s.length;i++)
    {
        let chS=s[i];
        let chT=t[i];
        if(map.has(chS))
        {
            if(map.get(chS)!==chT)
            {
                return false;
            }
            else
                {
            if (used.has(chT)) {
                return false;
            }
            map.set(chS, chT);
            used.add(chT);
        }
    }
        }
        return true;

    }