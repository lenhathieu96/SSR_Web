import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormControl, FormGroup } from "@material-ui/core";

import { Formik, Form, FastField } from "formik";
import InputTextField from "../../../../../Components/custom-fields/InputTextField";
import InputNumberField from "../../../../../Components/custom-fields/InputNumberField";

import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";

EditMenu.propTypes = {
  selectedFood: PropTypes.object.isRequired,
};

function EditMenu(props) {
  const { selectedFood, onAddNew, onUpdate, onDelete, onCancelSelect } = props;

  return (
    <div className="EditMenu-wrapper">
      {/* title */}
      <Typography variant="h4" component="h4">
        Thiết Lập Món
      </Typography>
      {/* form */}
      <Formik
        initialValues={{
          name: selectedFood.name,
          price: selectedFood.price,
        }}
        enableReinitialize
      >
        {(formikProps) => {
          const { values } = formikProps;
          return (
            <Form>
              <FormGroup className="input-wrapper">
                <FastField
                  name="name"
                  component={InputTextField}
                  label="Tên Món"
                  placeholder="Nhập Tên Món"
                  type="text"
                />
                <FastField
                  name="price"
                  component={InputNumberField}
                  label="Giá Tiền"
                  placeholder="Nhập Giá Tiền"
                  type="text"
                />
              </FormGroup>

              <FormControl className="btn-wrapper">
                {/* submit button */}
                <Button
                  type="submit"
                  startIcon={
                    selectedFood.name !== "" ? <UpdateIcon /> : <AddIcon />
                  }
                  className={`btn ${
                    selectedFood.name !== "" ? "btn--update" : "btn--add"
                  }`}
                >
                  {selectedFood.name !== "" ? "Chỉnh Sửa" : "Thêm Mới"}
                </Button>
                {/* btn-delete */}
                {selectedFood.name !== "" ? (
                  <Button startIcon={<DeleteIcon />} className="btn--del">
                    Xóa
                  </Button>
                ) : null}
                {/* btn-reset */}
                <Button className="btn" startIcon={<CancelIcon />} onClick = {()=>{
                  onCancelSelect()
                }}>
                  Hủy Bỏ
                </Button>
              </FormControl>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EditMenu;
