import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Shipping = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="container" style="padding: 5px">
        <form>
          <div class="address-title">
            <h3>List of Shipping Addresses For</h3>
          </div>

          <div class="address-information">
            <label for="address-info">
              <u>Edit</u> | <u>Company Name</u> | <u>Contact</u> | <u>Address 1</u> | <u>City</u> |
              <u>State</u> | <u>Reg Ship Date</u> | <u>Reg Arrival Date</u> | <u>Requested Ship Via</u>
            </label>
            <br></br>
          </div>

          <div class="address-field">
            <p>
              <b>
                <u>Add New Record</u>
              </b>
            </p>
          </div>

          <div class="shipping-title">
            <h3>Sales Order Shipping Information</h3>
          </div>

          <div>
            <table>
              <tr>
                <th>Order Master ID:</th>
                <th style="text-align: right;">Date:</th>
              </tr>

              <tr>
                <th>
                  <label for="comp-name">Company Name:</label>
                </th>
                <td>
                  <input type="text" id="comp-name" name="comp-name"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="con-name">Contact Name:</label>
                </th>
                <td>
                  <input type="text" id="con-name" name="con-name"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="address1">Address 1:</label>
                </th>
                <td>
                  <input type="text" id="address1" name="address1"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="address2">Address 2:</label>
                </th>
                <td>
                  <input type="text" id="address2" name="address2"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="city">City | </label>
                  <label for="state">State | </label>
                  <label for="zip">Zip:</label>
                </th>

                <td>
                  <input type="text" id="city" name="city"></input>
                  <select name="state" id="state">
                    <option value="" selected="selected">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <input type="text" id="zip" name="zip"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="province">Province:</label>
                </th>
                <td>
                  <input type="text" id="province" name="province" style="width:100%;"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="country">Country:</label>
                </th>
                <td>
                  <input type="text" id="country" name="country" style="width:100%;"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="phone">Phone:</label>
                </th>
                <td>
                  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" style="width:100%;"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="fax">Fax:</label>
                </th>
                <td>
                  <input type="text" id="fax" name="fax"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="email">Email:</label>
                </th>
                <td>
                  <input type="text" id="email" name="email" style="width:100%;"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <br></br>
                <th>
                  <label>
                    <b>
                      <u>
                        <big>Request Ship Via</big>
                      </u>
                    </b>
                  </label>
                </th>
              </tr>

              <tr>
                <th>
                  <label for="fedex">Fed Ex</label>
                </th>
                <td>
                  <select name="fedex" id="fedex">
                    <option value="" selected="selected">Select an Option</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="ups">UPS</label>
                </th>
                <td>
                  <select name="ups" id="ups">
                    <option value="" selected="selected">Select an option</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="c-w-cal">Courier | Will Call</label>
                </th>
                <td>
                  <select name="c-w-cal" id="c-w-cal">
                    <option value="" selected="selected">Select an option</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="abs">ABS Van</label>
                </th>
                <td>
                  <select name="abs" id="abs">
                    <option value="" selected="selected">Select an option</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="other-ship">Other Ship Method</label>
                </th>
                <td>
                  <input type="text" id="other-ship" name="other-ship"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="pay-method">Payment Method</label>
                </th>
                <td>
                  <select name="pay-method" id="pay-method">
                    <option value="" selected="selected">Select a Payment Method</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="acc-num">Account Number</label>
                </th>
                <td>
                  <input type="text" id="acc-num" name="acc-num"></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="ship-date">Requested Ship Date</label>
                </th>
                <td>
                  <input type="text" id="ship-date" name="ship-date"></input>
                </td>
                <td>
                  <select name="ship-date" id="ship-date">
                    <option value="" selected="selected">Ship Time</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="arrival-date">Requested Arrival Date/Time</label>
                </th>
                <td>
                  <input type="text" id="arrival-date" name="arrival-date"></input>
                </td>
                <td>
                  <select name="arrival-date" id="arrival-date">
                    <option value="" selected="selected">Arrival Time</option>
                  </select>
                  <br></br>
                  <td>
                    <label for="sat-arrival">Sat?</label>
                    <input type="checkbox" id="sat-arrival" name="sat-arrival" value="saturday"></input>
                    <br></br>
                  </td>
                </td>
              </tr>

              <tr>
                <th>
                  <label for="fob">FOB</label>
                </th>
                <td>
                  <select name="fob" id="fob">
                    <option value="" selected="selected">Point of Shipment</option>
                  </select>
                  <br></br>
                </td>
              </tr>

              <tr>
                <th>
                  <form action="" id="ship-notes">Shipping Notes</form>
                </th>
                <td>
                  <textarea name="ship-notes" form="ship-notes"></textarea>
                </td>
              </tr>
            </table>

            <div class="order-details">
              <h3>Order Details</h3>
            </div>

            <div class="order-information">
              <label for="order-info">
                <u>Item</u> | <u>Total of Order</u> | <u>Alreay Ordered</u> | <u>Ship To This Address</u>
              </label>
              <br></br>
            </div>

            <div class="final-order-field">
              <p>
                <b>
                  <u>l</u>
                </b>
              </p>
            </div>
          </div>
        </form>
      </div>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <label>Absolute Media, Inc.</label>
            </div>
            <div className="col-sm">
              <label>3350 Victor Ct. Santa Clara, CA 95054</label>
            </div>
            <div className="col-sm">
              <label>(408) 970-3283</label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Shipping;