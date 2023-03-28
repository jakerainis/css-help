export default function Test() {
  return (
    <div className="relative ml-12 mt-12 border-black border h-[500px] w-[500px]">
      <div className="relative ml-12 mt-12 border-black border h-[300px] w-[300px]">
        <div className="bg-red-100 relative -mt-6 border h-[100px] w-[100px]">
          Hello
        </div>
        <div className="bg-red-100 absolute left-[100px] top-0 border h-[100px] w-[100px]">
          Hello
        </div>
        {/* <div className="bg-red-200 border h-[100px] ml-2 w-[100px]">Hello2</div> */}
      </div>
    </div>
  );
}
