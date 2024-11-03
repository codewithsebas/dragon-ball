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
    <div className="flex items-center justify-center gap-2 text-white mb-5 sm:m-0">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 rounded-lg p-2 pe-4 duration-200 hover:bg-white/20 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
      >
        <IoIosArrowBack /> Anterior
      </button>

      <span className="flex h-fit items-center rounded-lg border p-1 px-3 shadow-sm duration-200 hover:bg-white/10">
        {currentPage}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 rounded-lg p-2 ps-4 duration-200 hover:bg-white/20 ${(currentPage === totalPages || totalPages === 0) ? 'cursor-not-allowed opacity-50' : ''
          }`}
      >
        Siguiente
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;