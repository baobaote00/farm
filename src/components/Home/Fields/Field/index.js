import { trongCay } from '../../../../context/Actions';
import { useGame } from '../../../../context/GameContext';

const Field = ({ data, daTuoi, viTri }) => {

    const { dispatch, ruong, tien } = useGame()

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        const hat = e.dataTransfer.getData("hat")
        const truongthanh = e.dataTransfer.getData("truongthanh")
        const caynon = e.dataTransfer.getData("caynon")
        const thoigiantruongthanh = e.dataTransfer.getData("thoigiantruongthanh")
        const thoigianthanhcaynon = e.dataTransfer.getData("thoigianthanhcaynon")
        const giatien = e.dataTransfer.getData("giatien")
        const giathuhoach = e.dataTransfer.getData("giathuhoach")

        if (!(hat || truongthanh || caynon || thoigianthanhcaynon || giatien || thoigiantruongthanh || giathuhoach)) {
            return
        }

        var data1 = {
            hat,
            truongthanh,
            caynon,
            thoigianthanhcaynon,
            thoigiantruongthanh,
            giatien,
            giathuhoach
        };

        dispatch(trongCay(data1, viTri, ruong, dispatch, tien))
    }

    return (
        <div className="o-ruong" onDragOver={allowDrop} onDrop={drop}>
            {daTuoi && <div className="da-tuoi" />}
            {data && <img src={data.truongthanh} className="cai-cay" alt="logo" />}
        </div>
    )
}

export default Field
