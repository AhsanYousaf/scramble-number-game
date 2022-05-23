function Matrix({ num, id, handleClick}) {

    let matrixClass = '';

    if ( num.stat === 'active' ) {
        matrixClass = 'matrixactive';
    }
    else {
        matrixClass = 'matrix'
    }

    return(
        <div className={ matrixClass } onClick={() => handleClick(id,num)}>
            <p>{num.number}</p>
        </div>
    )
}

export default Matrix;