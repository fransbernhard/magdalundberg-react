import React, { PureComponent } from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)',
        zIndex            : 1000
    },
    content: {
        top               : '50%',
        left              : '50%',
        right             : 'auto',
        bottom            : 'auto',
        marginRight       : '-50%',
        transform         : 'translate(-50%, -50%)',
        background        : 'rgba(0, 0, 0, 0.8)',
        width             : '100vw',
        height            : '100vh',
        display           : 'flex',
        justifyContent    : 'center',
        alignItems        : 'center',
        zIndex            : 1000
    }
};

class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            image: "",
            previewImg: "",
            productClass: ""
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addClasses = this.addClasses.bind(this);
        this.addProductContainerClass = this.addProductContainerClass.bind(this);
    }

    openModal(){
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal(){
        this.setState({
            modalIsOpen: false
        });
    }

    addClasses(cat){
        return (cat == 'Places') ? 'placesImgClass' : 'productImgClass';
    }

    addProductContainerClass(cat){
        return (cat == 'Places') ? 'hvr-sink placesBoxClass' : 'hvr-sink productBoxClass';
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render(){
        const divStyle = {
            backgroundImage: 'url(' + this.state.image + ')'
        }

        const cat = this.props.product.catName;

        if(this.state.image){
            if(cat == 'Places'){
                var img = <div className={this.addClasses(cat)} style={divStyle}/>
            } else {
                var img = <img className={this.addClasses(cat)} alt={this.props.product.name} src={this.state.image} />
            }
        }

        const stockInt = parseInt(this.props.product.stocked);

        const name = stockInt
          ? <h3>{this.props.product.name}</h3>
          : <h3>{this.props.product.name} - SÅLD</h3>;

        const desc = this.props.product.desc
            && <p>{this.props.product.desc}</p>

        const limited = this.props.product.limited
            && <p>begränsad upplaga: {this.props.product.limited} ex</p>

        const available = this.props.product.available
            && <p>tillgängliga: {this.props.product.available} ex</p>

        const price = this.props.product.price
            && <p>{this.props.product.price} kr</p>

        const type = this.props.product.type
            && <p>{this.props.product.type}</p>

        const size = this.props.product.size
            && <p>{this.props.product.size} cm</p>

        const modalName = this.props.product.name
            && <h2><a className="modalDesc" href="mailto:magdamargaretha@gmail.com?subject=Fri!%20Fri!%20Fri!&body=Innan%20du%20skriver%20vill%20jag%20bara%20säga%20hej.%20Hej">{this.props.product.name}</a></h2>

        const modalDesc = this.props.product.modalDesc
            && <h2>{this.props.product.modalDesc}</h2>

        const modalDescSmall = this.props.product.modalDesc
            && <p>{this.props.product.modalDesc}</p>

        return (
          <div>
            <div className={this.addProductContainerClass(this.props.product.catName)} onClick={this.openModal}>
                {img}
                {name}
                {type}
                {limited}
                {available}
                {size}
                {price}
                {desc}
                {modalDescSmall}
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Modal"
            >
                <div className="modal-box">
                    <div className="close" onClick={this.closeModal}>x</div>
                    <img src={this.state.previewImg}/>
                    {modalName}
                    {modalDesc}
                </div>
            </Modal>
          </div>
        );
    };

    // componentDidMount() {
    //     import(`./images/${this.props.product.thumbnail}`)
    //     .then((image) => {
    //         this.setState({
    //             image: image
    //         })
    //     }).catch(err => {
    //         console.log('Error importing thumbnail: ' + err);
    //     });
    //
    //
    //     import(`./images/${this.props.product.previewImg}`).then(
    //         (previewImg) => this.setState({
    //             previewImg: previewImg
    //         })
    //     ).catch((err) => {
    //         console.log('Could not import preview image: ' + err);
    //     });
    // }
};

export default Product;
