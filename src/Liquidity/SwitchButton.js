import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default function SwitchButton(props) {
  const { setDeploy } = props;

  const changeStyles = (K) => {
    if (K === true) {
      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = " #3de398"

      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = "#9e9e9e";
    } else {
      let remove_button = document.getElementById("remove-button");
      remove_button.style.backgroundColor = " #3de398"

      let add_button = document.getElementById("add-button");
      add_button.style.backgroundColor = "#9e9e9e";
    }
  };

  return (
    <div>
      <ButtonGroup size="large" variant="contained">
        <Button
          id="add-button"
          color="primary"
          className="some_demo"
          text="white"
          onClick={() => {
            setDeploy(true);
            changeStyles(true);
          }}
        >
          Deploy Liquidity
        </Button>

        <Button
          id="remove-button"
          // color="secondary"
        
          text="white"
          onClick={() => {
            setDeploy(false);
            changeStyles(false);
          }}
        >
          Remove Liquidity
        </Button>
      </ButtonGroup>
    </div>
  );
}