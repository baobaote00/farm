const Seed = ({ data }) => {

    const handleDrag = (e) => {
        e.dataTransfer.setData("hat", data.hat);
        e.dataTransfer.setData("truongthanh", data.truongthanh);
        e.dataTransfer.setData("caynon", data.caynon);
        e.dataTransfer.setData("thoigiantruongthanh", data.thoigiantruongthanh);
        e.dataTransfer.setData("thoigianthanhcaynon", data.thoigianthanhcaynon);
        e.dataTransfer.setData("giatien", data.giatien);
        e.dataTransfer.setData("giathuhoach", data.giathuhoach);
    }

    return (
        <div className="seed-tool" onDragStart={handleDrag}>
            {data &&
                <>
                    <div className="ten-hat">{data.ten}</div>
                    <img src={data.truongthanh} className="seed-img" alt="logo" />
                    <div className="gia-tien">{data.giatien}</div>
                </>}
        </div>
    )
}

export default Seed
