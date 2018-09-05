import React, { Component } from 'react';

class validation extends Component {
      
    render () {

        function testing(){
            const plat = document.getElementById('plat-number').value;
            var isPlateOk = /^[A-Z]{0,2} ?  ?\d{0,4} ?  ?[A-Z]{0,3}$/.test(plat);
            if (isPlateOk){
                var benar = 'Format Yang Anda Masukan Benar';
                document.getElementById('valid-feedback').innerHTML = benar;
                document.getElementById('valid-feedback').classList.remove('d-none');
                document.getElementById('invalid-feedback').classList.add('d-none');
            } else {
                var salah = 'Format Yang Anda Masukan Salah';
                document.getElementById('invalid-feedback').innerHTML = salah;
                document.getElementById('invalid-feedback').classList.remove('d-none');
                document.getElementById('valid-feedback').classList.add('d-none');
            }
            console.log(isPlateOk);
        }

        return (
            <div class="validation">
                <div class="form-group d-flex justify-content-center mt-3">
                    <div class="input-group mb-3 col-md-10">
                        <input type="text" class="form-control" id="plat-number" placeholder="Plat Number" aria-label="Plat Number" aria-describedby="cek"></input>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick={testing} id="cek">Cek!</button>
                        </div>
                    </div>
                </div>
                <div class="form-group text-center" id="valid-feedback">
                
                </div>
                <div class="form-group text-center" id="invalid-feedback">
                
                </div>
            </div>
        );
    }
}

export default validation