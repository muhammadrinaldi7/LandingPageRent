export const Sidebar = (props) => {
    const { listMenu } = props;
   return (
    <>
        <div className="flex items-center justify-between px-10 py-2 text-3xl font-medium text-center text-white bg-green-600">
            <h1>Sidebar</h1>
        </div>
        <div className="flex flex-col">
            {listMenu.map((item, index) => (
                <Button key={index} variant="contained" color="success">
                    {item}
                </Button>
            ))}
        </div>
    </>
   ) 
}