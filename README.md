<!-- <p align="center">
  <img width="300" src="./client/public/logo.png">
</p> -->

[EaTokyo](https://eatokyo.herokuapp.com/) is our vision to support the Japanese Government's Go-to-Eat Campaign in the Tokyo area. Throughout the Go-to-Eat Campaign, the Japanese government will be offering customers 25% discounts to several local restaurants and reimbursing those restaurants the difference. 

However, public information about this campaign has been vague and confusing. With an application like EaTokyo, customers can find all the information they need to take advantage of these discounted prices, search for all participating restaurants, and order the discounted vouchers online. 

いい東京! Stay safe, and keep supporting the small businesses in our communities! 

### For Users
Select an area from the dropdown menu. You can also add filters for food type and/or budget. When you're ready, click on the "Let's Eat!" button.

Click on a restaurant, select the quantity and dollar amount of the voucher you'd like to purchase, and click "Order." You will receive the voucher and can use it at the selected restaurant on your next visit!

### For Contributors
In the development environment:

1. Install dependencies in root and client directories.
```
yarn
```

```
cd client
```

2. Start frontend and backend servers in separate terminals:
```
yarn start
```
```
cd ..
yarn start
```
3. Open up frontend server at http://localhost:3000.

### Technologies Used
- React
- Express
- Stripe Checkout API

### Future Features
- Map view