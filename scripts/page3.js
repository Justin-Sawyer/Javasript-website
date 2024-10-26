function nextPage4() {
    document.getElementById("go-to").innerHTML = `<div class="card shadow">
    <div class="card-body">
        <h3>Congratulations!</h3>
        <h4 class="formula">Press the button to contine</h4>
        
        <!-- Show / Hide / Top -->
        <div class="container card-buttons">
            <div class="row align-items-start">
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="page4.html">Next Page</a>
                </div>
                <div class="col-sm-4 hide code-buttons" id="">
                    <a class="back-to-top btn bg-warning-subtle border-dark btn-sm w-100" id="">Hide</a>
                </div>
                <div class="col-sm-4 text-end">
                    <a class="back-to-top btn bg-info-subtle border-dark btn-sm w-100" href="#top">Top</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

    document.getElementById("next").scrollIntoView({ behavior: "smooth", block: "start" });
};

function revisePage3() {
    document.getElementById("go-to").innerHTML = `<div class="card shadow">
    <div class="card-body">
        <h3>Do some revision?</h3>
        <h4 class="formula">What do you want to go over?</h4>
        
        <!-- Show / Hide / Top -->
        <div class="container card-buttons">
            <div class="row align-items-start">
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#strings">Strings</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#let">let</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#const">const</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#data-types">Data Types</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#type-conversion">Type Conversion</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#math">Math</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#user-input">User Input</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#using-constants">Using Constants</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#counters">Counters</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#random">Random</a>
                </div>
                <div class="col-sm-4 code-buttons" id="">
                    <a class="back-to-top btn bg-success-subtle border-dark btn-sm w-100" href="#if">If</a>
                </div>
                <div class="col-sm-4 text-end">
                    <a class="back-to-top btn bg-info-subtle border-dark btn-sm w-100" href="#top">Top</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

    document.getElementById("go-to").scrollIntoView({ behavior: "smooth", block: "start" });
};