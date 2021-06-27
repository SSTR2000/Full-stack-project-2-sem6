import React, { Component } from 'react';

class Block extends Component {

    onBatchSelect(block) {
        this.props.history.push(`/room/${block}`);
    }
    render() {
        return (
            <div className="mid container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">PG 1</h5>
                            <p onClick={() => this.onBatchSelect('PG 1')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">PG 2</h5>
                            <p onClick={() => this.onBatchSelect('PG 2')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">PG 3</h5>
                            <p onClick={() => this.onBatchSelect('PG 3')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">PG 4</h5>
                            <p onClick={() => this.onBatchSelect('PG 4')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;