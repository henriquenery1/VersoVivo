const AddContent: React.FC = () => {
    return (
        <div className="relative z-10">
            <input type="text" placeholder="Título da obra" className="block mb-10 mx-auto bg-old-book-page rounded-lg h-20 w-2/4 p-4 text-3xl bg-opacity-80 placeholder:text-center placeholder:text-gray-700 text-content-pen shadow-lg" />

            <textarea className="mx-auto block bg-old-book-page rounded-lg h-[32rem] w-2/4 text-2xl bg-opacity-80 placeholder:text-center placeholder:text-gray-700 text-content-pen p-4 custom-scrollbar shadow-lg" 
            placeholder="O que está pensando?">
            </textarea>
        </div>
    );
};

export default AddContent;
