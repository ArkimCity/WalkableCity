import seoulJson from "../seoulGeo/AL_11_D162_20200917.json";

let i = 1;

for (let geo of seoulJson["features"]) {
    i++;
    if (i > 10) {
        break;
    }
    console.log(geo);
    
}