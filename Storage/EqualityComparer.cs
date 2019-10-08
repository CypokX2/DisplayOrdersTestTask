using System;
using System.Collections.Generic;
using System.Text;

namespace Storage
{
    public class EqualityComparer<T> : IEqualityComparer<T>
    {
        readonly Func<T, T, bool> _comparer;
        readonly Func<T, int> _hash;

        public static EqualityComparer<T> GetInstance(Func<T, T, bool> comparer) => new EqualityComparer<T>(comparer);


        public EqualityComparer(Func<T, T, bool> comparer)
            : this(comparer, t => 0) 
        {
        }

        public EqualityComparer(Func<T, T, bool> comparer, Func<T, int> hash)
        {
            _comparer = comparer;
            _hash = hash;
        }

        public bool Equals(T x, T y)
        {
            return _comparer(x, y);
        }

        public int GetHashCode(T obj)
        {
            return _hash(obj);
        }
    }
}
