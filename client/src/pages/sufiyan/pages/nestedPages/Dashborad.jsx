import "../../styles/Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../../components/Chart";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Dashborad = () => {
  const { data, loading, error } = useSelector((store) => store.product);

  const { data: adminData } = useSelector((store) => store.admin);

  let Income = 0

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
              <p className="text-primary-p"> Number of employees </p>
              <span className="font-bold text-title">5</span>
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
                <h1>Income</h1>
                <p>$ {Income/2}</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>${Income}</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p> {adminData.users.length}</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p> {adminData.carts.length}</p>
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
