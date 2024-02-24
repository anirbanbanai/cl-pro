import React from "react";
import {
  Button,
  Card,
  CardBody,
  Dialog,
  Input,
} from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  _id: string;
  size: string;
  color: string;
  style: string;
};

type Tsh = {
  _id: string;
  name: string;
  price: number;
  brand: string;
  model: string;
  style: string;
  size: string;
  color: string;
  releaseDate: string;
  role: string;
  quantity: number;
};

type Dd = {
  main: Tsh;
};

export function SunDrayer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      size: "xxl",
      color: "blue",
      style: "curve",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    toast.success(`Sell successfull`);
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        className="rounded-3xl bg-blue-400 "
        variant="outlined"
        placeholder={""}
      >
        Next
      </Button>
      <Dialog
        placeholder={""}
        size="xl"
        open={open}
        handler={handleClose}
        className="bg-transparent shadow-none "
      >
        <Card placeholder={""} className="">
          <CardBody placeholder={""} className="h-full overflow-y-auto">
            <h1 className="text-4xl font-semibold text-center mb-3">Sell</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-1 md:grid grid-cols-2 gap-4">
                <label htmlFor="">
                  <h2 className="font-semibold">Size</h2>
                  <Input
                    {...register("size")}
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                </label>
                <label htmlFor="">
                  <h2 className="font-semibold">Color</h2>
                  <Input
                    {...register("color")}
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                </label>
                <label htmlFor="">
                  <h2 className="font-semibold">Style</h2>
                  <Input
                    {...register("style")}
                    size="lg"
                    placeholder="price"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                </label>
              </div>

              <Button
                type="submit"
                placeholder={""}
                className="mt-6 bg-yellow-500 text-black"
                fullWidth
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                placeholder={""}
                className="mt-3 bg-red-500 text-white"
                fullWidth
              >
                Close
              </Button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
