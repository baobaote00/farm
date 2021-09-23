import { trongCay } from '../../../../context/Actions';
import { useGame } from '../../../../context/GameContext';

const Field = ({ data, daTuoi, viTri }) => {

    const { dispatch, ruong } = useGame()

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        var data1 = {
            hat: e.dataTransfer.getData("hat"),
            truongthanh: e.dataTransfer.getData("truongthanh"),
            caynon: e.dataTransfer.getData("caynon"),
            thoigiantruongthanh: e.dataTransfer.getData("thoigiantruongthanh"),
            thoigianthanhcaynon: e.dataTransfer.getData("thoigianthanhcaynon"),
            giatien: e.dataTransfer.getData("giatien"),
            giathuhoach: e.dataTransfer.getData("giathuhoach")
        };
        dispatch(trongCay(data1, viTri, ruong))
    }

    return (
        <div className="o-ruong" onDragOver={allowDrop} onDrop={drop}>
            {daTuoi && <div className="da-tuoi" />}
            {data && <img src={data.truongthanh} className="cai-cay" alt="logo" />}
        </div>
    )
}

export default Field
