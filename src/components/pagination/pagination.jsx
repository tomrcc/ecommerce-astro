export default function ShopPagination({ pagination }) {
  const {
    currentPage,
    lastPage,
    url: { next, prev },
  } = pagination;

  if (lastPage === 1) {
    return <></>;
  }

  const pageLinks = [];
  for (let i = 1; i <= lastPage; i++) {
    pageLinks.push(
      <li key={i}>
        <a
          className={`page-link btn ${i === currentPage ? 'active' : ''}`}
          href={i === 1 ? '/shop' : `/shop/${i}`}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <>
      <nav>
        <ul>
          {prev && (
            <li>
              <a href={prev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.657"
                  height="11.314"
                  viewBox="0 0 20.657 11.314"
                  style={{ transform: 'scale(-1, 1)' }}
                >
                  <g fill="#fff" data-name="Group 12">
                    <path d="M0 4.657h18v2H0z" data-name="Rectangle 2400" />
                    <path
                      d="M13.586 9.9l5.6568542-5.6568542 1.4142136 1.4142135-5.6568542 5.6568543z"
                      data-name="Rectangle 2401"
                    />
                    <path
                      d="M15 0l5.6568542 5.6568542-1.4142135 1.4142136-5.6568543-5.6568542z"
                      data-name="Rectangle 2402"
                    />
                  </g>
                </svg>
              </a>
            </li>
          )}
          {pageLinks}
          {next && (
            <li>
              <a href={next}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.657"
                  height="11.314"
                  viewBox="0 0 20.657 11.314"
                >
                  <g fill="#fff" data-name="Group 12">
                    <path d="M0 4.657h18v2H0z" data-name="Rectangle 2400" />
                    <path
                      d="M13.586 9.9l5.6568542-5.6568542 1.4142136 1.4142135-5.6568542 5.6568543z"
                      data-name="Rectangle 2401"
                    />
                    <path
                      d="M15 0l5.6568542 5.6568542-1.4142135 1.4142136-5.6568543-5.6568542z"
                      data-name="Rectangle 2402"
                    />
                  </g>
                </svg>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}