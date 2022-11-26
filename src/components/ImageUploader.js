import Typography from "@mui/material/Typography";
import {useRef, useState} from "react";

export const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const fileInput = useRef(null);

    const handleOndragover = (e) => {
        e.preventDefault();
        setImage(null);
        setUrl("");
    };


    const handleFile = (file) => {
        setImage(file);
        setUrl(URL.createObjectURL(file));
    }

    const handleOndrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files[0];
        handleFile(files);
    }


    return (
        <div>
            {
                image && url ? (
                        <img src={url} alt={`sary ${url}`} style={{width: "100%"}}/>
                    ) :
                    <div className={"drag_drop"}
                         onDragOver={handleOndragover}
                         onDrop={handleOndrop}
                         onClick={() => fileInput.current.click()}
                    >
                        <Typography
                            variant={"h6"}
                            align={"center"}
                        >
                            Glisser et déposer
                            un image ici
                        </Typography>
                        <input
                            type="file"
                            accept='image/*'
                            ref={fileInput} hidden
                            onChange={e => handleFile(e.target.files[0])}
                        />
                    </div>
            }
        </div>
    )
};
