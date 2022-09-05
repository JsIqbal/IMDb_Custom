import TableHeader from './table.header.component';
import TableBody from './table.body.component';

/*
    1. Stateless functional component : when we know that no state is needed.
*/

function Table(props) {
    const { items, columns, currentPage, limit } = props;
    const start = ((currentPage - 1) * limit) + 1;
    const end = currentPage * limit;
    const total = items.length;
    const pageCount = total/limit;
    const pages = [];
    for(let i = 1; i<= pageCount ; i++) {
        pages.push(i);
    }

    const filteredItems = items.filter((item, index) => index+1 >= start && index+1 <= end );

    return (
        <>
            <table className="table">
                <TableHeader columns={columns} />
                <TableBody items={filteredItems} columns={columns} />
            </table>
            
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link">Previous</a></li>
                    {
                        pages.map((page) => (
                            <li className={currentPage === page ? `page-item active` : "page-item" }><a class="page-link">{page}</a></li>
                        ))
                    }
                    <li class="page-item"><a class="page-link">Next</a></li>
                </ul>
            </nav>
        </>
    );
}
 
export default Table;