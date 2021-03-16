function FlInput() {
    return (
        <div className="mt-1 relative rounded-md shadow-sm bg-gray-100 rounded-lg px-5 w-34 h-10 dark:bg-gray-600">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="sm:text-sm">
                    <i className="ri-search-2-line text-sm text-gray-300" />
                </span>
            </div>
            <input
                type="text"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 outline-none block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md bg-gray-100 dark:bg-gray-600 rounded-lg px-5 w-34 h-10"
            />
            {/*<div className="absolute inset-y-0 right-0 flex items-center">*/}
            {/*  <label htmlFor="currency" className="sr-only">Currency</label>*/}
            {/*  <select id="currency" name="currency"*/}
            {/*          className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">*/}
            {/*    <option>USD</option>*/}
            {/*    <option>CAD</option>*/}
            {/*    <option>EUR</option>*/}
            {/*  </select>*/}
            {/*</div>*/}
        </div>
    );
}

export default FlInput;
