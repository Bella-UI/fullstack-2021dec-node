interface Cake {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
  }



async function handleGetCake(event: any, cakeName: string){
    try {
        const cakeName:string = event.target.value;
        // @ts-ignore
        const { data } = await axios.put('/api/get-cake', { cakeName });
        const { fullCake, error } = data;
        console.log(data);

        if (error) throw new Error(error);
        renderFullCake(fullCake);

    } catch (error) {
        console.error(error);
    } 
}

function renderFullCake(fullCake:Cake){
    let root: HTMLElement = document.querySelector("#root");
    let html=""
    html=`<div id="name">fullCake.name</div>`
    const ingNo=fullCake.ingredients.length
    for(let i:number=0;i<ingNo;i++){
        html+=`<div class="ingredients">${fullCake.ingredients[i]}</div>`
    }
    const preNo=fullCake.prepareMode.length
    for(let j:number=0;j<preNo;j++){
        html+=`<div class="prepares">${fullCake.prepareMode[j]}</div>`
    }

    root.innerHTML=html
}
