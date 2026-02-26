using System.ComponentModel.DataAnnotations;

namespace BookStore.Helpers
{
    public class QueryObject
    {
        public string? Title { get; set; } = null;
        public string? Genre { get; set; } = null;
        public string? SortBy { get; set; } = null;
        public bool IsDescending { get; set; } = false;

        private const int MaxPageSize = 50;
        private int _pageSize = 10;

        [Range(1, int.MaxValue, ErrorMessage = "Страница должна быть не меньше 1")]
        public int PageNumber { get; set; } = 1;

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = value > MaxPageSize ? MaxPageSize : value;
        }
    }
}
