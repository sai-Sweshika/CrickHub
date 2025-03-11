import React from "react";
const CricketScore = () => {
    return (
        <div className='bg-primary w-100 p-3' >
           
            <div className='flex items-center justify-content-center gap-5'>
                <input type="text" className='p-2 rounded-lg' placeholder='Search teams.....' />
                <button className='p-6 py-2 border-none outline-none text-black hover:bg-white hover:text-black duration-300 transition'>Search</button>

            </div>
            <div className="w-40 h-40">
                <div>
                    <h2>Live Cricket Score App
                    </h2>
                    <h4>Get real time updates on your favourite matches</h4>
                    <div className="d-flex flex-wrap justify-content-center gap-3 bg-primary ">
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>Pakistan vs New Zealand</h4>
                            <h6>New Zealand won by 60 runs</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" height={40} width={40} />
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>Bangladesh  vs India</h4>
                            <h6>India won by 6 wickets</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1200px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png" alt="" height={40} width={40} />
                            </div>
                            <h4>South Africa vs Afganistan</h4>
                            <h6>South Africa won by 107 runs</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" alt="" height={40} width={40} />
                            </div>
                            <h4>England vs Australia</h4>
                            <h6>Australia won by 5 wickets</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png" alt="" height={40} width={40} />
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>Pakistan vs India</h4>
                            <h6>India won by 6 wickets</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>Bangladesh  vs New Zealand</h4>
                            <h6>New Zealand won by 5 wickets</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png" alt="" height={40} width={40} />
                            </div>
                            <h4>Australia vs South Africa</h4>
                            <h6>Match abandoned due to rain (No toss)</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1200px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>Afganistan  vs England</h4>
                            <h6>Afghanistan won by 8 runs</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="" height={40} width={40} />
                            </div>
                            <h4> Pakistan vs Bangladesh </h4>
                            <h6>Match abandoned due to rain (No toss)</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1200px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" alt="" height={40} width={40} />
                            </div>
                            <h4>Afganistan  vs Australia</h4>
                            <h6>No result - due to rain</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png" alt="" height={40} width={40} />
                            </div>
                            <h4>England vs South Africa</h4>
                            <h6>South Africa won by 7 wickets</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="" height={40} width={40} />

                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>India  vs new Zealand</h4>
                            <h6>India won by 44 runs</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" alt="" height={40} width={40} />
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="" height={40} width={40} />
                            </div>
                            <h4>Australia vs India</h4>
                            <h6>India won by 4 wickets</h6>
                        </div>
                        <div className="border border-3 w-100% bg-white gap-40" >
                            <div className="d-flex justify-content-center gap-5">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" alt="" height={40} width={40} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png" alt="" height={40} width={40} />


                            </div>
                            <h4>New Zealand vs South Africa</h4>
                            <h6>New Zealand won by 50 runs</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CricketScore






