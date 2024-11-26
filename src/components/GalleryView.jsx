import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const GalleryView = ({ showThumbs = true, width = "700px", height = "570px", radius = "4px" }) => {
	const images = [
		{ src: "/produc-image-1.jpeg" },
		{ src: "/produc-image-2.jpeg" },
		{ src: "/produc-image-3.jpeg" },
		{ src: "/produc-image-4.jpeg" },
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNext = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevious = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className={`gallery-container grid grid-rows-[80%_20%] relative mb-4 bg-[#F9F8FE]`} style={{ width, height }}>
			<div className="main-image flex justify-center items-center relative p-2">
				<img
					src={images[currentImageIndex]?.src || ""}
					alt={`Imagem ${currentImageIndex + 1}`}
					className="w-full h-full object-cover rounded-lg"
				/>

				
				<button onClick={handlePrevious} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
					<ChevronLeft />
				</button>

				
				<button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
					<ChevronRight />
				</button>
			</div>

			{/* Miniaturas */}
			{showThumbs && (
				<div className="thumbs grid grid-cols-4 gap-2 p-2">
					{images.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={`Miniatura ${index + 1}`}
							className={`w-full h-full object-cover rounded cursor-pointer ${currentImageIndex === index ? "border-2 border-pink-600" : ""}`}
							onClick={() => setCurrentImageIndex(index)}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default GalleryView;
