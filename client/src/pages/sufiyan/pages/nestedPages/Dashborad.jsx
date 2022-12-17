import "../../styles/Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../../components/Chart";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Dashborad = () => {
  const { data, loading, error } = useSelector((store) => store.product);

  const { data: adminData } = useSelector((store) => store.admin);

 
  let pending_sales = 0
  let cart = adminData.carts.map((el)=> el.cart)
  .flat().forEach((el)=> pending_sales+= +el.price)


  let sales_revenue = 0
  let purchase = adminData.carts.map((el)=> el.purchase)
  .flat().forEach((el)=> sales_revenue+= +el.price)



console.log(pending_sales.toFixed(1), sales_revenue)
 

  //adminData.carts.map((el) => el.cartData.map((x) => Income += +x.price));

  const allProducts = data?.length


  let PendingPurchase = 0;
  adminData.carts.map((el)=> PendingPurchase += +el.cart.length )

  let TotalNumberOfSales = 0;
  adminData.carts.map((el)=> TotalNumberOfSales += +el.purchase.length )
  
  console.log(PendingPurchase, TotalNumberOfSales );

  return (
    <HStack zIndex={50} maxW="1200px" >
      <Box alignSelf={"center"} className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <HStack className="main__title" >
          <img src={hello} alt="hello" />
          <div style={{ textAlign: "start" }} className="main__greeting">
            <h1 >Hello Chief</h1>
            <p >Welcome to your admin dashboard</p>
          </div>
        </HStack>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
           
            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">
                {adminData.users.length}
              </span>
            </div>
          </div>

          <div className="card">
           
            <div className="card_inner">
              <p className="text-primary-p">Number of Products</p>
              <span className="font-bold text-title">{allProducts}</span>
            </div>
          </div>

          <div className="card">
           
            <div className="card_inner">
              <p className="text-primary-p">Pending Purchase</p>
              <span className="font-bold text-title">
                {PendingPurchase}
              </span>
            </div>
          </div>

          <div className="card">
           
            <div className="card_inner">
              <p className="text-primary-p"> Total Sales </p>
              <span className="font-bold text-title">{TotalNumberOfSales}</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Bangalore, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Bangalore, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Revenue </h1>
                <p>$ {(sales_revenue/1.5).toFixed(2)}</p>
              </div>
              

              <div className="card2">
                <h1>Sales</h1>
                <p>${sales_revenue.toFixed(2)}</p>
              </div>

              <div className="card3">
                <h1>Pending Purchase</h1>
                <p> {pending_sales.toFixed(2)}</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p> {TotalNumberOfSales}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </Box>
    </HStack>
  );
};

export default Dashborad;
