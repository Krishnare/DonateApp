const fetchData = async () =>{
    try{
        const response = await fetch('https://api.myjson.com/bins/covpl');
        const dataDetail = await response.json();
        console.log(dataDetail);
        return dataDetail;
    } catch (e) {
        console.log(e);
    }
}
export { fetchData };