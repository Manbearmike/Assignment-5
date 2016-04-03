function CustomerInfo() //getAllCustomers Called by Button
{   var objRequest = new XMLHttpRequest();
    //Create AJAX request object
    //Create URL and Query string
    var Customerurl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
{         if (objRequest.readyState == 4 && objRequest.status == 200)
{         var Customeroutput = JSON.parse(objRequest.responseText);
        GenerateCustomers(Customeroutput);
}
}   //Initiate the server request
    objRequest.open("GET", Customerurl, true);
    objRequest.send(); }
        
function GenerateCustomers(results)
{  var count = 0;
   var displaytext = "<table><tr><th>Customer ID</th><th>Customer Name</th><th>Customer City</th></tr>";
   //Loop to extract data from the response object
   for (count = 0; count < results.GetAllCustomersResult.length; count++)
   {  displaytext += "<tr><td>" + results.GetAllCustomersResult[count].CustomerID + "</td><td>" + results.GetAllCustomersResult[count].CompanyName + "</td><td>"
   + results.GetAllCustomersResult[count].City + "</td></tr>";}
   displaytext += "</table>"; 
   document.getElementById("AllCustomersdisplay").innerHTML = displaytext;}
////////////////////////////////////////////////////////////////////////////////
function GetOrders() //getOrdersForCustomer Called by Button
{   var objRequest = new XMLHttpRequest();
    //Create AJAX request object
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
{         if (objRequest.readyState == 4 && objRequest.status == 200)
{         var output = JSON.parse(objRequest.responseText);
         GenerateOutput(output);
}
}   //Initiate the server request
    objRequest.open("GET", url, true);
    objRequest.send(); }
    
    function GenerateOutput(result)
{   var count = 0;
    var displaytext = "<table><tr><th>Order ID</th><th>Order Date</th><th>Shipping Address</th><th>Shipping City</th><th>Shipping Name</th><th>ShipPostcode</th></tr>";
    //Loop to extract data from the response object
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
    {  displaytext += "<tr><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity
    + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td></tr>";}
    displaytext += "</table>";
    document.getElementById("orderdisplay").innerHTML = displaytext;}
//////////////////////////////////////////END SECTION GETORDERSFORCUSTOMER//////////////////////////////////////////////    
function GetHistoryOrders()  //getCustomerOrderHistory Called by Button
{   var objRequest = new XMLHttpRequest();
    //Create AJAX request object
    //Create URL and Query string
    var Historyurl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    Historyurl += document.getElementById("custidHistory").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
{         if (objRequest.readyState == 4 && objRequest.status == 200)
{         var Historyoutput = JSON.parse(objRequest.responseText);
        GenerateOutputHistory(Historyoutput);
}
}   //Initiate the server request
    objRequest.open("GET", Historyurl, true);
    objRequest.send(null); }
    
function GenerateOutputHistory(Historyresult)
{   var count = 0;
    var displaytext = "<table><tr><th>Product Name</th><th>Total</th></tr>";
    //Loop to extract data from the response object
    for (count = 0; count < Historyresult.length; count++)
    {  displaytext += "<tr><td>" + Historyresult[count].ProductName + "</td><td>" + Historyresult[count].Total + "</td></tr>";}
    displaytext += "</table>";
    document.getElementById("Historydisplay").innerHTML = displaytext;}
 //////////////////////////////////////////////////END SECTION CUSTOMER HISTORY///////////////////////////////////////////   


    
///////////////////////SECTION VISIBILITY//////////////////////////////    
function MenuChoice()
{     if (document.getElementById("SectionMenu").value == "Display The First Section")
{         document.getElementById("FirstSection").style.visibility = "visible";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "hidden";
}
    else if (document.getElementById("SectionMenu").value == "Display The Second Section")
{         document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "visible";
            document.getElementById("ThirdSection").style.visibility = "hidden";
            }
    else if (document.getElementById("SectionMenu").value == "Display The Third Section")
{         document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "visible";
            }
            else
            {       document.getElementById("FirstSection").style.visibility = "hidden";
                    document.getElementById("SecondSection").style.visibility = "hidden";
                    document.getElementById("ThirdSection").style.visibility = "hidden";
            } }    

    