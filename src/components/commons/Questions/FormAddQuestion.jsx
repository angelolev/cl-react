import React from "react";
import { useForm } from "react-hook-form";

const FormAddQuestion = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.addNewQuestion(data);
    reset({ question: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        name="description"
        id="description"
        rows={5}
        cols={50}
        {...register("question", { required: true, maxLength: 100 })}
      />
      {errors?.question?.type === "required" && <p>This field is required</p>}
      {errors?.question?.type === "maxLength" && (
        <p>First name cannot exceed 100 characters</p>
      )}
      <input className="btn yellow" type="submit" value="Agregar" />
    </form>
  );
};

export default FormAddQuestion;
