import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "8a2fd622b09fe164cd5a3cd0097a5b35";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const review = {
            name: data.name,
            retting: data.retting,
            review: data.review,
            img: img,
          };
          // send to your database
          fetch("https://immense-anchorage-97299.herokuapp.com/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Review added successfully");
                reset();
              } else {
                toast.error("Failed to add the Review");
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a New Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Retting</span>
          </label>
          <input
            type="number"
            placeholder="Your Retting"
            className="input input-bordered w-full max-w-xs"
            {...register("retting", {
              required: {
                value: true,
                message: "Retting is Required",
              },
              pattern: {
                value: /^[0-5]?$|^5$/,
                message: "Provide our 5 star rating",
              },
            })}
          />
          <label className="label">
            {errors.retting?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.retting.message}
              </span>
            )}
          </label>
          {errors.retting?.type === "pattern" && (
            <span className="label-text-alt text-red-500">
              {errors.retting.message}
            </span>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            type="textarea"
            placeholder="Your Review"
            className="textarea textarea-bordered w-full max-w-xs "
            {...register("review", {
              required: {
                value: true,
                message: "Review is Required",
              },
            })}
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.review.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddReview;
