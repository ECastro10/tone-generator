/**
 * Created by emanuel on 6/26/17.
 */
var SinePlaying = false;
var sine_node;
var sine_gain_node;
var SawtoothPlaying = false;
var sawtooth_node;
var sawtooth_gain_node;
var SquarePlaying = false;
var square_node;
var square_gain_node;
var TrianglePlaying = false;
var triangle_node;
var triangle_gain_node;
var currentFrequency;
var sanitized = true;

function PlaySine() {
    //Work on rounding up to two decimal places and then turn it into a function to prevent dupliicate of code
    var useFrequency = $('#frequency_number').val();
    useFrequency = useFrequency.toFixed(2);
    console.log(useFrequency);

    if (SinePlaying == false) {
        var note_context = new AudioContext();
        sine_node = note_context.createOscillator();
        sine_gain_node = note_context.createGain();
        sine_node.frequency.value = useFrequency;
        sine_node.type = 'sine';
        sine_gain_node.gain.value = 0;
        sine_node.connect(sine_gain_node);
        sine_node.connect(note_context.destination);
        sine_gain_node.value = .3;
        sine_node.start();
        SinePlaying = true;

    } else {
        sine_node.stop();
        SinePlaying = false;
    }

}

function PlaySawtooth(frequency){

    if (SawtoothPlaying == false) {
        var note_context = new AudioContext();
        sawtooth_node = note_context.createOscillator();
        sawtooth_gain_node = note_context.createGain();
        sawtooth_node.frequency.value = frequency;
        sawtooth_node.type = 'sawtooth';
        sawtooth_gain_node.gain.value = 0;
        sawtooth_node.connect(sawtooth_gain_node);
        sawtooth_node.connect(note_context.destination);
        sawtooth_gain_node.value = 0.3;
        sawtooth_node.start();
        SawtoothPlaying = true;

    } else {
        sawtooth_node.stop();
        SawtoothPlaying = false;
    }

}

function PlaySquare(frequency){

    if (SquarePlaying == false) {
        var note_context = new AudioContext();
        square_node = note_context.createOscillator();
        square_gain_node = note_context.createGain();
        square_node.frequency.value = frequency;
        square_node.type = 'square';
        square_gain_node.gain.value = 0;
        square_node.connect(square_gain_node);
        square_node.connect(note_context.destination);
        square_gain_node.value = 0.3;
        square_node.start();
        SquarePlaying = true;

    } else {
        square_node.stop();
        SquarePlaying = false;
    }

}

function PlayTriangle(frequency){

    if (TrianglePlaying == false) {
        var note_context = new AudioContext();
        triangle_node = note_context.createOscillator();
        triangle_gain_node = note_context.createGain();
        triangle_node.frequency.value = frequency;
        triangle_node.type = 'triangle';
        triangle_gain_node.gain.value = 0;
        triangle_node.connect(triangle_gain_node);
        triangle_node.connect(note_context.destination);
        triangle_gain_node.value = 0.3;
        triangle_node.start();
        TrianglePlaying = true;

    } else {
        triangle_node.stop();
        TrianglePlaying = false;
    }

}

function sanitizeThis() {
    currentFrequency = $('#frequency_number').val();
    console.log(currentFrequency);
}

$('#frequency_number').val("");