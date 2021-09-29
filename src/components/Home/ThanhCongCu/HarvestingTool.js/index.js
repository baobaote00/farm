const HarvestingTool = () => {
    const handleDrag = (e) => {
        e.dataTransfer.setData("thuHoach", true);
    }
    return (
        <div className="harvesting-tools">
            <div className="seed-tool" onDragStart={handleDrag}>
                <img src={"https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/xen.png?alt=media&token=ee1fd077-aa39-4058-ac92-d9b6d11ef22d"} className="seed-img" alt="logo" />
            </div>
        </div>
    )
}

export default HarvestingTool
