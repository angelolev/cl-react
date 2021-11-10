import React from "react";
import { useForm } from "react-hook-form";

const FormAddComment = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.addNewComment(data);
    reset({ comment: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "30px" }}>
      <textarea
        name="description"
        id="description"
        rows={5}
        cols={50}
        style={{ marginBottom: "20px" }}
        {...register("comment", { required: true, maxLength: 100 })}
      />
      {errors?.comment?.type === "required" && <p>This field is required</p>}
      {errors?.comment?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      <input className="btn yellow" type="submit" value="Responder" />
    </form>
  );
};

export default FormAddComment;
