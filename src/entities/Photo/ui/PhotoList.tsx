import { Photo } from "./Photo";

export const PhotoList = () => {
	return (
		<div className="grid grid-cols-4 grid-rows-2 gap-5">
			<Photo src="/pictures/gallery1.webp" className="col-start-1 col-end-3" />
			<Photo src="/pictures/gallery2.webp" />
			<Photo src="/pictures/gallery3.webp" />
			<Photo src="/pictures/gallery4.webp" />
			<Photo src="/pictures/gallery5.webp" className="col-start-2 col-end-4" />
			<Photo src="/pictures/gallery6.webp" />
		</div>
	);
};
