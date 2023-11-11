import {MY_IP} from "./IP_help";

//STOCK api
export async function fetchDataGetStocks(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stocks",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataGetLimitedStock(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/lowStock",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataGetSortedPriceStock(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/sortPret",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataGetSortedQuantityStock(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/sortQuantity",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}
export async function fetchDataAddStocks(name, quantity, price, amount, unit){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addStock",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "quantity": quantity,
                "price": price,
                "amount": amount,
                "unit": unit
            })
        });

}

export async function fetchDataUpdateStocks(id, name, quantity, price, amount, unit){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "name": name,
                "quantity": quantity,
                "price": price,
                "amount": amount,
                "unit": unit
            })
        });

}

export async function fetchDataDeleteStocks(id) {
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/delete/" + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return responseJson;
}


//PRODUCT api

export async function fetchDataGetProducts(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/products",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataGetSortedPriceProducts(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/product/sortPrice",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataGetSortedNameProducts(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/product/sortName",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataAddProduct(myName, description, price, incredients, incredients_quantiti, photoLink){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addProduct",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "name": myName,
                "description": description,
                "price": price,
                "incredients": incredients,
                "incredients_quantiti": incredients_quantiti,
                "photoLink": photoLink
            })
        });

}

export async function fetchDataDeleteProduct(id){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/product/delete/" + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return responseJson;
}

export async function fetchDataUpdateProduct(myId, myName, description, price, incredients, incredients_quantiti, photoLink){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/product/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": myId,
                "name": myName,
                "description": description,
                "price": price,
                "incredients": incredients,
                "incredients_quantiti": incredients_quantiti,
                "photoLink": photoLink
            })
        });

}

//PROFIT api

export async function fetchDataGetProfit(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/profits",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataUpdateProfit(id, curentProfit, historic){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/profit/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "curentProfit": curentProfit,
                "historic": historic
            })
        });


}


//TABLE api

export async function fetchDatainitStoreTables(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/initStoreTable",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
        });

    return responseJson;
}


export async function fetchDataGetStoreTable(){
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/StoreTables",
        {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

    return await responseJson.json();
}


export async function fetchDataUpdateStoreTable(myId, tableNumber, state, cart, products_quantiti){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/StoreTable/update",
        {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": myId,
                "tableNumber": tableNumber,
                "state": state,
                "cart": cart,
                "products_quantiti": products_quantiti
            })
        });

}