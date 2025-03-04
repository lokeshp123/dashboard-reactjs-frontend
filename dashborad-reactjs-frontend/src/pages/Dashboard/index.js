import DashboardBox from "./compontents/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { Chart } from "react-google-charts";

 import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
 import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

  export const options = {
    'backgroundColor': 'transparent',
    'chartArea' :{'width': '100%','height': '100%'},  
  };

const Dashboard = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [ShowBy, setShowBy] = useState('');
  const [ShowBysetCatBy, setCatBy] = useState('');
  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 48;

  const context = useContext(MyContext);

  useEffect(()=>{

      context.setisHideSidebarAndHeader(false);
       window.scrollTo(0,0);
  },[]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<IoMdCart />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<MdShoppingBag />}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0 topPart2">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <HiDotsVertical />
                  </Button>
                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <PiClockCounterClockwiseFill /> Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PiClockCounterClockwiseFill /> Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PiClockCounterClockwiseFill /> Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PiClockCounterClockwiseFill /> Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white font-wight-bold">$3,787,681.00</h3>
              <p>$3,578.90 in last month</p>

              <Chart
                chartType="PieChart"
                width="100%"
                height="170px"
                data={data}
                options={options}
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best selling products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={ShowBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>CATGORY BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={ShowBysetCatBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered table-striped v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p> Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width:'70px' }}>
                       <del className="old">$21.00</del>
                        <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#2</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/02.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>mans</td>
                  <td>lubana</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$29.00</del>
                      <span className="new text-danger">$14.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>189</td>
                  <td>$9k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#3</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/03.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>ecstasy</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$45.00</del>
                      <span className="new text-danger">$33.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                             <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#4</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/04.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p> Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>ecstasy</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$55.00</del>
                      <span className="new text-danger">$43.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                           <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#5</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/05.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>ecstasy</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                          <Button className="secondary" color="secondary"><FaEye />
                            </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#6</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/06.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p> Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#7</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/07.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p> Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px'}}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#8</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/08.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#9</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/09.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td> 
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#10</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img card shadow m-0">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/10.webp"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="info pl-3">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className="old">$21.00</del>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)<Rating name="read-only" defaultValue={4.5} precision={0.5} size="small" readOnly /></td> 
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                  <div className="actions d-flex align-items-center">
                      <Link to="/product/details" >
                      <Button className="secondary" color="secondary"><FaEye />
                      </Button>
                      </Link>
                      <Button className="success" color="success">
                        <FaPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

              </tbody>

            </table>

            <div className="d-flex tableFooter">
              <p>showing  <b>12</b> of <b>60</b> results</p>
                <Pagination count={10} color="primary"  className="pagination"
                showFirstButton showLastButton/>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;







