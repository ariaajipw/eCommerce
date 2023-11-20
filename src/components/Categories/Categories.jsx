import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="./product/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="./product/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="./product/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/999303/pexels-photo-999303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link className="link" to="./product/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link className="link" to="./product/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="./product/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
