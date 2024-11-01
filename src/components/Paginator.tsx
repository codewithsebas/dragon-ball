import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage, totalPages, onPageChange
}: PaginatorProps) => {

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {/* Displays the current page number and buttons to go forward or backward. */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 rounded-lg p-2 pe-4 duration-200 hover:bg-white/10 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
      >
        <IoIosArrowBack /> Anterior
      </button>

      <span className="flex h-fit items-center rounded-lg border p-1 px-3 shadow-sm duration-200 hover:bg-white/10">
        {currentPage}
      </span>

      {/* Buttons are disabled if you are on the first or last page. */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 rounded-lg p-2 ps-4 duration-200 hover:bg-white/10 ${totalPages < currentPage ? 'cursor-not-allowed opacity-50' : ''
          }`}
      >
        Siguiente
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;