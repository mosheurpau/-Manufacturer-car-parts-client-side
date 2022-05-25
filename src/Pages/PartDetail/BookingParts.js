import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const BookingParts = ({ parts }) => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { img, name, price, quantity, description } = parts;
  const newQuantity = parseInt(quantity);

  let bookingQuantity = 12;
  const onSubmit = (data) => {
    bookingQuantity(data.quantity);
  };

  return (
    <div>
      <div className="mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 justify-items-center"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Parts quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
                min: {
                  value: 12,
                  message: "You can't booking less then 12 parts quantity",
                },
                max: {
                  value: newQuantity,
                  message: "You can't booking more then Available quantity",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
            {errors.quantity?.type === "min" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
            {errors.quantity?.type === "max" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is Required",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea
              type="textarea"
              placeholder="Your Address"
              className="textarea textarea-bordered w-full max-w-xs "
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is Required",
                },
              })}
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Booking Quantity"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingParts;
