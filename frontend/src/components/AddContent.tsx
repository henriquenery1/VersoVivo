const AddContent: React.FC = () => {
    return (
        <div className="relative">
            <input type="text" placeholder="Título da obra" className="block mb-10 mx-auto bg-stormy-grey rounded-lg h-20 w-2/4 p-4 text-3xl bg-opacity-90 text-center placeholder:text-center placeholder:text-gray-700 text-content-pen shadow-lg" />

            <textarea className="mx-auto block bg-stormy-grey rounded-lg h-[32rem] w-2/4 text-2xl bg-opacity-90 placeholder:text-center placeholder:text-gray-700 text-content-pen p-4 custom-scrollbar shadow-lg" 
            placeholder="O que está pensando?">
            </textarea>
        </div>
    );
};

export default AddContent;
