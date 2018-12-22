/**
 * Aula Biscoito da Sorte
 * Início 27/11/2017
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao: {
                width: 250,
                height: 50,
                borderWidth: 2,
                borderColor: '#FF0000',
                backgroundColor: 'transparent',
                borderRadius: 25,
            },
            botaoArea: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            botaoText: {
                color: props.color,
                fontSize: 14,
                fontWeight: 'bold',
            },
        });
    }

    render() {
        return ( <
            TouchableOpacity style = { this.styles.botao }
            onPress = { this.props.aoClicar } >
            <
            View style = { this.styles.botaoArea } >
            <
            Text style = { this.styles.botaoText } > { this.props.text } < /Text>

            <
            /View>

            <
            /TouchableOpacity>
        );
    };
}

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { texto: 'Clique para quebrar o biscoito...' };

        this.frases = ['Na vida tudo é passageiro, menos motorista e cobrador...',
            'Não faça hoje oque pode ser feito amanhã...',
            'Curta a vida, pois você só terá uma...',
            'O dinheiro faz homens ricos, o conhecimento faz homens sábios e a humildade faz grandes homens.',
            'Se não puder contar como fez não faça!!!',
            'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.',
            'Corra o risco. Se der certo, felicidade. Se não, sabedoria.',
            'A dor faz você mais forte, o medo faz você mais corajoso e a paciência faz você mais sábio.',
            'A gente vive esperando que as coisas mudem, que as pessoas mudem. Até que um dia a gente muda e vê que nada mais precisa mudar.',
            'Ontem eu era inteligente, queria mudar o mundo. Hoje eu sou sábio, estou mudando a mim mesmo.',
            'Comece onde você está, use o que você tem e faça o que você pode.',
            'As pessoas mais felizes não tem o melhor de tudo, elas apenas fazem o melhor com tudo o que têm.',
            'O amor é a única loucura de um sábio e a única sabedoria de um tolo.',
            'Nunca tenha certeza de nada. A sabedoria começa com a dúvida.',
            'Pense menos, viva mais.',
            'A criatividade é a inteligência se divertindo.',
            'Não polua evolua...',
            'Eu acredito que o sentido da vida seja fazer sentido a outras vidas.',
            'Nunca é cedo demais para nos transformarmos no melhor que podemos ser. ',
            'Lembre-se da sabedoria da água: ela nunca discute com seus obstáculos, ela simplesmente os contorna',
            'O homem comum fala, o sábio escuta, o tolo discute.',
            'Seja forte o suficiente para abrir mão do que não lhe serve mais e paciente o suficiente para esperar por aquilo que for do seu merecimento.',
            'Talvez amadurecer seja entender que perder e sofrer te fazem crescer. Muitas vezes, perder também é uma forma de ganhar.',
            'O silêncio é de ouro e muitas vezes é a resposta.',
            'Fuja dos três acidentes geométricos da vida: círculos viciosos, triângulos amorosos e bestas quadradas.',
            'Nada melhor do que derrubar com um sorriso, quem um dia te machucou com uma lágrima.',
            'Atrair o que você espera, refletir o que deseja, tornar-se o que respeita e espelhar-se no que você admira.',
            'Não existe sábio sem empenho, nem sabedoria sem trabalho!',
            'Até situações ruins podem trazer coisas boas.',
            'Não perca sua leveza carregando o peso dos outros.',
            'Conhecer a si mesmo é o começo de toda a sabedoria.',
            'Procure a sabedoria e aprenda a escrever os capítulos mais importantes de sua história nos momentos mais difíceis de sua vida.',
            'Uma pessoa inteligente aprende com os seus erros, uma pessoa sábia aprende com os erros dos outros.',
            'O sábio pode mudar de opinião. O ignorante, nunca.',
            'Uma pessoa inteligente resolve um problema, um sábio o previne.',
            'Se você deseja viajar longe e rápido, viaje leve. Deixe pra trás todas suas invejas, ciúmes, incapacidade de perdoar, egoísmo, e medos.',
            'Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro.',
            'Não basta saber, é preciso aplicar. Não basta querer, é preciso também agir.',
            'No caminho da sabedoria te ensinei, e pelas veredas da retidão te fiz andar.',
            'Saber não é o bastante, precisamos aplicar. Querer não é o suficiente, precisamos fazer.',
            'Se não puder convencer, confunda...', 'Quem mata o tempo não é um assassino e sim um suicida...',
            'Não sou piolho para ir pela cabeças dos outros..'
        ];
        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito() {
        let s = this.state;

        let r = Math.floor(Math.random() * this.frases.length);
        s.texto = this.frases[r];
        this.setState(s);
    }


    render() {
        return (


            <
            View style = { styles.corpo } >

            <
            Image source = { require('./images/cookie.png') }
            />

            <
            Text style = { styles.texto } > "{this.state.texto}" < /Text>

            <
            Botao color = 'orange'
            text = 'Quebrar Biscoito'
            aoClicar = { this.quebrarBiscoito }
            />

            <
            /View>
        );
    }
}

const styles = StyleSheet.create({
    corpo: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 17,
        color: '#B59619',
        margin: 30,
        fontStyle: 'italic',
    },

    titulo: {
        fontSize: 17,
        color: '#B59619',
        margin: 30,
        fontStyle: 'italic',
    },
});