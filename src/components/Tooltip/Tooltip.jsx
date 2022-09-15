import './Tooltip.css';

const Tooltip = ({ content, children }) => {
    return (
        <div className='tooltip'>
            {children}
            <div className="tooltip-content">
                {content}
            </div>
        </div>
    );
}

export default Tooltip;
