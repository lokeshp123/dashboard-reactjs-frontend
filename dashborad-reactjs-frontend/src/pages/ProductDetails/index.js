import React, { useRef } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import Slider from "react-slick";
import StoreIcon from "@mui/icons-material/Store";
import PixIcon from '@mui/icons-material/Pix';
import SettingsIcon from '@mui/icons-material/Settings';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import VerifiedIcon from '@mui/icons-material/Verified';
import UserAvatarImgComponent from "../../components/userAvatarImg";

import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import { FaReply } from "react-icons/fa";



//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {

  const productSliderBig = useRef();
  const productSliderSml = useRef();

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };


  const goToSlide=(index)=>{
    productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);

  }
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb label="Products" component="a" href="#" />
            <StyledBreadcrumb label="Products View" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSEction">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-3">
                <h6 className="mb-4">Product Gallery </h6>
                <Slider {...productSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      className="w-100"
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      className="w-100"
                    />
                  </div>
                </Slider>

                <Slider {...productSliderSmlOptions} ref={productSliderSml} className="sliderSml">
                  <div className="item" onClick={()=>goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      className="w-100"/>
                    
                  </div>
                  <div className="item" onClick={()=>goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(5)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(6)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(7)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(8)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      className="w-100"
                    />
                  </div>

                  <div className="item" onClick={()=>goToSlide(9)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      className="w-100"
                    />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-3">
                <h6 className="mb-4">Product Details </h6>

                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>

                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <StoreIcon />
                      </span>
                      <span className="name">Brand</span>
                    </div>

                    <div className="col-sm-9">
                      : <span> Ecstasy</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <PixIcon />
                      </span>
                      <span className="name">Category</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Man's</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <SettingsIcon />
                      </span>
                      <span className="name">Tags</span>
                    </div>

                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>suite</span>
                          </li>
                          <li className="list-inline-item">
                            <span>party</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Dress</span>
                          </li>
                          <li className="list-inline-item">
                            <span>smart</span>
                          </li>
                          <li className="list-inline-item">
                            <span>man</span>
                          </li>
                          <li className="list-inline-item">
                            <span>styles</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <ColorLensIcon />
                      </span>
                      <span className="name">Color</span>
                    </div>

                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>red</span>
                          </li>
                          <li className="list-inline-item">
                            <span>blue</span>
                          </li>
                          <li className="list-inline-item">
                            <span>green</span>
                          </li>
                          <li className="list-inline-item">
                            <span>yellow</span>
                          </li>
                          <li className="list-inline-item">
                            <span>purple</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <SummarizeIcon />
                      </span>
                      <span className="name">Size</span>
                    </div>

                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SM</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MD</span>
                          </li>
                          <li className="list-inline-item">
                            <span>LG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XL</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XXL</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <SellIcon />
                      </span>
                      <span className="name">Price</span>
                    </div>

                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        $37.00 <del>$42.00</del>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <ShoppingCartIcon />
                      </span>
                      <span className="name">Stock</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>(68) piece</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <RateReviewIcon />
                      </span>
                      <span className="name">Review</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>(03) review</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        {" "}
                        <VerifiedIcon />
                      </span>
                      <span className="name">PubliShed</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>02 feb 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            {/* <h6 className="mt-4 mb-3">product description </h6> */}
            <h6 className="mc-divide-title mt-5 mb-4">product description </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium?Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>

            <br />

            <h6 className=" mc-divide-title mt-5 mb-4">Rating Analytics</h6>

            <div className="ratingSection-grp d-flex">
              <div className="ratingSection">
                <div className="ratingrow d-flex align-items-centre">
                  <span className="col1">5 Star</span>

                  <div className="col2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>

                  <span className="col3">(22)</span>
                </div>

                <div className="ratingrow d-flex align-items-centre">
                  <span className="col1">4 Star</span>

                  <div className="col2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>

                  <span className="col3">(06)</span>
                </div>

                <div className="ratingrow d-flex align-items-centre">
                  <span className="col1">3 Star</span>

                  <div className="col2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>

                  <span className="col3">(05)</span>
                </div>

                <div className="ratingrow d-flex align-items-centre">
                  <span className="col1">2 Star</span>

                  <div className="col2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>

                  <span className="col3">(03)</span>
                </div>

                <div className="ratingrow d-flex align-items-centre">
                  <span className="col1">1 Star</span>

                  <div className="col2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>

                  <span className="col3">(02)</span>
                </div>
              </div>
            </div>

            <br />

            <h6 className=" mc-divide-title mt-5 mb-4">Customer_Reviews</h6>

            <div className="reviewsSection">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                        
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        lg={true}
                      />

                      <div className="info pl-3">
                        <h6>Lokesh Patil</h6>
                        <span>25 minutes ago!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    </div>
                  </div>
                  
                  <div className="col-md-5 d-flex align-items-center">
                       <div className="ml-auto"> 
                      <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply />
                      Reply &nbsp; </Button>
                      </div> 
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>


              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                        
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img="https://mironcoder-hotash.netlify.app/images/avatar/02.webp"
                        lg={true}
                      />

                      <div className="info pl-3">
                        <h6>tahmina bonny</h6>
                        <span>3 weeks ago!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    </div>
                  </div>
                  
                  <div className="col-md-5 d-flex align-items-center">
                       <div className="ml-auto"> 
                      <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply />
                      Reply &nbsp; </Button>
                      </div> 
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>

              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                        
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        lg={true}
                      />

                      <div className="info pl-3">
                        <h6>Lokesh Patil</h6>
                        <span>25 minutes ago!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    </div>
                  </div>
                  
                  <div className="col-md-5 d-flex align-items-center">
                       <div className="ml-auto"> 
                      <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply />
                      Reply &nbsp; </Button>
                      </div> 
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>



              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                        
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img="https://mironcoder-hotash.netlify.app/images/avatar/04.webp"
                        lg={true}
                      />

                      <div className="info pl-3">
                        <h6>shahriar nafiz</h6>
                        <span>active now!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    </div>
                  </div>
                  
                  <div className="col-md-5 d-flex align-items-center">
                       <div className="ml-auto"> 
                      <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply />
                      Reply &nbsp; </Button>
                      </div> 
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>

            </div>



            <br/>


            <h6 className="mt-4 mb-4">Review Reply Form</h6>

            <form className="reviewForm">
                  <textarea placeholder="write here "></textarea>
                    <Button className="btn-blue btn-big btn-lg w-100 mt-4">drop your replies</Button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
