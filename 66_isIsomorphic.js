var isIsomorphic = function(s,t){
    if(s.length !== t.length) return false;//cant be isomorphic

    let mapST = {};
    let mapTS = {};

    for(let i = 0; i < s.length; i++){
        let charS = s[i];
        let charT = t[i];

        if((mapST[charS] && mapST[charS] !== t[i] ) || (mapTS[charT] && mapTS[charT] !== s[i])) 
            return false;

        //mapping characters in both maps
        mapST[charS] = charT;
        mapTS[charT] = charS;
    }
    return true;
}

let s = "egg", t = "add";
let a = "abc", b = "cde";
console.log(isIsomorphic(s,t));
console.log(isIsomorphic(a,b));