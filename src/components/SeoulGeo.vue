<script>

fetch('../seoulGeo/AL_11_D162_20200917.json').then((response)=>{
    return response.json();
}).then((gJson)=>{
    console.log(gJson["features"][0]);
})

export default {
    
}
</script>