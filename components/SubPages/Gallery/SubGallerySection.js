import React from 'react'
import GalleryImages from "../../GalleryImages"


const SubGallerySection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10 md:px-20 py-10">
        <GalleryImages className="h-96 col-span-1" title="Presidential Suite" />
        <GalleryImages className="h-96 col-span-1" title="Governor's Suite" />
        <GalleryImages className="h-96 col-span-1" title="Mayor's Suite" />
        <GalleryImages className="h-96 col-span-1" title="Executive Suite" />
      </div>
    );
}

export default SubGallerySection
